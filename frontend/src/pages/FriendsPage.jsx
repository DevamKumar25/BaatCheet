// src/pages/FriendsPage.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api.js";
import PageLoader from "../components/PageLoader.jsx";

const FriendsPage = () => {
  const { data: friends = [], isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  if (isLoading) return <PageLoader />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Friends</h1>
      {friends.length === 0 ? (
        <p>No friends yet.</p>
      ) : (
        <ul>
          {friends.map((friend) => (
            <li key={friend._id} className="p-2 border-b">
              <img
                src={friend.profilePic}
                alt={friend.fullName}
                className="w-10 h-10 rounded-full inline-block mr-2"
              />
              {friend.fullName} — {friend.nativeLanguage} →{" "}
              {friend.learningLanguage}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendsPage;
