import React from "react";
import { dummyData } from "../data/dummy_data";
import PostCard from "../components/PostCard";

function Homepage() {
  return (
      <div
            style={{
                    maxWidth: "1200px",
                            margin: "0 auto",
                                    padding: "20px",
                                            display: "grid",
                                                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                                                            gap: "20px",
                                                                    justifyContent: "center",
                                                                          }}
                                                                              >
                                                                                    {dummyData.map((post) => (
                                                                                            <PostCard
                                                                                                      key={post.postID}
                                                                                                                title={post.title}
                                                                                                                          content={post.content}
                                                                                                                                    thumbnail={post.thumbnail}
                                                                                                                                              createdAt={post.createdAt}
                                                                                                                                                      />
                                                                                                                                                            ))}
                                                                                                                                                                </div>
                                                                                                                                                                  );
                                                                                                                                                                  }
                                                                                                                                                                  
                                                                                                                                                                  export default Homepage;
