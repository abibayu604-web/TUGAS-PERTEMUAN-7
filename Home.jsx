import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <Avatar
            src="https://i.pravatar.cc/300"
            sx={{ width: 120, height: 120, margin: "auto" }}
          />

          <Typography variant="h4">
            Syahla Salsa
          </Typography>

          <Typography variant="h6">
            Mahasiswa Informatika
          </Typography>

          <Typography>
            Email API: {user.email}
          </Typography>

          <Button
            component={Link}
            to="/about"
            variant="contained"
            sx={{ mt: 2, mr: 1 }}
          >
            Tentang Saya
          </Button>

          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{ mt: 2 }}
          >
            Kontak
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Home;