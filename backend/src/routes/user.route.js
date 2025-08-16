import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getRecommendeUsers,
  getMyFriends,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendReqs,
} from "../controller/user.controller.js";

const router = express.Router();

// Apply auth middleware to all routes in this router
router.use(protectRoute);

router.get("/", getRecommendeUsers);
router.get("/friends", getMyFriends);
router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests", getFriendRequests);

router.get("/outgoing-friend-requests",getOutgoingFriendReqs);


export default router;
