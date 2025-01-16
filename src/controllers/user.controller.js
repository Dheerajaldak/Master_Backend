import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    // Example response, assuming this is where the logic would go
    res.status(200).json({
        message: "User registration successful",
    });
});

export { registerUser };
