export default function getRolePermissions(
  role: "admin" | "vendor" | "cashier" | "agent"
) {
  if (role === "admin") {
    return true;
  } else if (role === "vendor") {
    return true;
  } else {
    return false;
  }
}
