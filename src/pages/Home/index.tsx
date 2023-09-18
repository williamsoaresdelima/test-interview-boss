import React, { useState } from "react";

import * as S from "./style";
import { Box } from "@mui/material";
import ProfileCard from "../../components/ProfileCard";
import ProfilesService from "../../services/Profiles";

function Home() {
  const [profiles, setProfiles] = useState([]);

  React.useEffect(() => {
    ProfilesService.GetAll().then((res: any) => {
      setProfiles(res.data);
    });
  }, []);

  return (
    <S.Container>
      <Box>
        {profiles.length &&
          profiles.map((profile: any) => {
            return <ProfileCard key={profile.id} profile={{ ...profile }} />;
          })}
      </Box>
    </S.Container>
  );
}

export default Home;
