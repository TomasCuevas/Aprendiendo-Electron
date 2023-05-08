import { BrowserRouter, Routes, Route } from "react-router-dom";

//* layout *//
import { LoggedLayout } from "@/layouts";

//* pages *//
import { Album, Albums, Artist, Artists, Home, Profile } from "@/pages";

export const LoggedNavigation: React.FC = () => {
  return (
    <BrowserRouter>
      <LoggedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoggedLayout>
    </BrowserRouter>
  );
};
