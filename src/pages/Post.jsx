import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    console.log(post)

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userid === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getListing(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);


    const deletePost = () => {
        appwriteService.deleteListing(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredimage);
                window.alert("Deleted Successfully");
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-4">
            {isAuthor && (
              <div className="flex justify-center align-middle pb-4">
                <Link to={`/edit-room/${post.$id}`}>
                  <Button bgColor="bg-blue-500" className="mr-3">
                    Edit
                  </Button>
                </Link>
                <Button bgColor="bg-red-500" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          <Container >
            <div className="flex flex-wrap">
              {/* Image */}
              <div className="w-full md:w-1/2 mb-4  pr-6 h-96 min-h-fit overflow-hidden">
                <img
                  src={appwriteService.getFilePreview(post.featuredimage)}
                  alt={post.roomname}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
      
              {/* Map */}
              <div className="w-full md:w-1/2 mb-4 pl-6">
                <MapContainer
                  center={[post.latitude, post.longitude]}
                  zoom={10}
                  style={{ height: "380px", width: "100%" }}
                >
                  <TileLayer
                    attribution="Google Maps"
                    url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
                    maxZoom={20}
                    subdomains={["mt0", "mt1", "mt2", "mt3"]}
                  />
                  <Marker position={[post.latitude, post.longitude]} />
                </MapContainer>
              </div>
            </div>
      
            {/* Description */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold">{post.roomname}</h1>
              <p className="text-sm text-gray-500">Location : {post.location}</p>
              <p className="text-xs text-gray-500">Added by {post.username}</p>
            </div>
           
            <div className="browser-css bg-zinc-50 p-10 shadow-md shadow-black/10 rounded-sm">{parse(post.roomdetails)}
            </div>
          </Container>
        </div>
      ) : null;
      
}