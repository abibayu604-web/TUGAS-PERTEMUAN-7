import {
  Container,
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";

import { Link } from "react-router-dom";

function About() {
  return (
    <Container sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h4">
            Tentang Saya
          </Typography>

          <Typography>
            Nama : Abi Bayu Pamungkas
          </Typography>

          <Typography>
            Pendidikan : S1 Informatika
          </Typography>

          <Typography>
            Hobi : Coding, Membaca, Desain
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Kembali
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default About;