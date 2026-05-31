import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField
} from "@mui/material";

function Contact() {
  const [nama, setNama] = useState("");

  return (
    <Container sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h4">
            Kontak
          </Typography>

          <TextField
            label="Masukkan Nama"
            fullWidth
            margin="normal"
            onChange={(e) => setNama(e.target.value)}
          />

          <Typography>
            Halo, {nama}
          </Typography>

          <Typography>
            Email: syahla@email.com
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Contact;