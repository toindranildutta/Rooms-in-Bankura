import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import LocationFinder from "../LocationFinder";


export default function RoomForm({ post }) {

    const [selectedPosition, setSelectedPosition] = useState(null);



    console.log(selectedPosition)


    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            roomname: post?.roomname || "",
            slug: post?.$id || "",
            roomdetails: post?.roomdetails || "",
            latitude: post?.latitude || selectedPosition?.lat || "",
            longitude: post?.longitude || selectedPosition?.lng || "",
        },
    });
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    console.log(userData)


    const submit = async (data) => {

        console.log(data);
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredimage);
            }

            const dbPost = await appwriteService.updateListing(post.$id, {
                ...data,
                featuredimage: file ? file.$id : undefined,
            });

            if (dbPost) {
                window.alert("Updated Successfully");
                navigate(`/rooms/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredimage = fileId;

                const dbPost = await appwriteService.createListing({ ...data, userid: userData?.$id, username: userData?.name });

                if (dbPost) {
                    window.alert("Created Successfully");
                    navigate(`/rooms/${dbPost.$id}`);
                }
            }
        }
    };



    // Handle slug
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "roomname") {
                setValue("slug", slugTransform(value.roomname), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    // Handle position change
    const handlePositionChange = useCallback((position) => {
        setSelectedPosition(position)
        setValue("latitude", position.lat, { shouldValidate: true })
        setValue("longitude", position.lng, { shouldValidate: true })
    }, [])




    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            {/* Left Hand Side */}
            <div className="w-3/5 px-2">
                <Input
                    label="Roomname :"
                    placeholder="Roomname"
                    className="mb-4 "
                    {...register("roomname", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />


                <div className="flex gap-2">
                    <Input
                        label="Featured Image (max 2mb) :"
                        type="file"
                        className="w-full mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-1/2 mb-4">
                            <img
                                src={appwriteService.getFilePreview(post.featuredimage)}
                                alt={post.title}
                                className="rounded-lg"
                            />
                        </div>
                    )}

                    <label htmlFor="status" className="w-1/2 mb-4">
                        <h1 className="mb-1 pb-0.5">Status :</h1>
                        <Select
                            id="status"
                            options={["active", "inactive"]}
                            className="w-full py-3 shadow-lg border border-gray"
                            {...register("status", { required: true })}
                        />
                    </label>
                </div>

                    

                <RTE label="Content :" name="roomdetails" defaultValue={getValues("roomdetails")} control={control} />
            </div>

            {/* Right Hand Side */}
            <div className="w-2/5 px-2">

                {/* Map Input Start */}
                <div>
                    <Input
                        type="value"
                        label="Latitude"
                        placeholder="Latitude"
                        className="w-full mb-4"
                        {...register("latitude", { required: true })}


                    />
                    <Input
                        type="value"
                        label="Longitude"
                        placeholder="Longitude"
                        className="w-full mb-4"
                        {...register("longitude", { required: true })}

                    />
                </div>

                <MapContainer
                    center={[23.2313, 87.0784]}
                    zoom={10}
                    style={{ height: "550px", width: "100%", margin: "15px auto 5px auto" }}


                //scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution="Google Maps"
                        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
                        url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
                        //url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
                        maxZoom={20}
                        subdomains={["mt0", "mt1", "mt2", "mt3"]}

                    />


                    <LocationFinder onPositionChange={handlePositionChange} />

                </MapContainer>

                {/* Map Input End */}

                <Button type="submit" bgColor={post ? "bg-blue-600" : undefined} className="w-full mt-3 hover:bg-blue-500">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}