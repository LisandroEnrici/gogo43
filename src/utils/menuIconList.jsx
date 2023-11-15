import React from "react";
import {
  LiaWineBottleSolid,
  LiaGlassMartiniSolid,
  LiaWineGlassAltSolid,
  LiaGlassWhiskeySolid
} from "react-icons/lia";
import { CgGlassAlt } from "react-icons/cg";
import { GiBeerBottle } from "react-icons/gi";

export default function MenuIconList({ iconName }) {
  switch (iconName) {
    case "LiaGlassWhiskeySolid":
      return <LiaGlassWhiskeySolid />;
    case "LiaGlassMartiniSolid":
      return <LiaGlassMartiniSolid />;
    case "LiaWineGlassAltSolid":
      return <LiaWineGlassAltSolid />;
    case "LiaWineBottleSolid":
      return <LiaWineBottleSolid />;
    case "CgGlassAlt":
      return <CgGlassAlt />;
    case "GiBeerBottle":
      return <GiBeerBottle />;
    default:
      return null;
  }
}
