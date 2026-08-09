export function toUserDto(user) {
    return {
        id: user._id.toString(),
        email: user.email,
        role: user.role,
    };
}