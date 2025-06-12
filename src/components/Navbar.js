import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ background: "#000", color: "white" }}>
    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
      <h2>YouTube Clone</h2>
    </Link>
  </Stack>
);

export default Navbar;
