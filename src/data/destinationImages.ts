import anuradhapura from "@/assets/destination-anuradhapura-stupa.jpg.asset.json";
import arugamBay from "@/assets/destination-arugam-bay-surf.avif.asset.json";
import colombo from "@/assets/destination-colombo-lotus.jpg.asset.json";
import dambulla from "@/assets/destination-dambulla.jpg.asset.json";
import delftIsland from "@/assets/destination-delft.jpg.asset.json";
import ella from "@/assets/destination-ella-nine-arch.jpg.asset.json";
import galle from "@/assets/destination-galle.jpg.asset.json";
import haputale from "@/assets/destination-haputale-adisham.jpg.asset.json";
import jaffna from "@/assets/destination-jaffna-city.jpg.asset.json";
import kalpitiya from "@/assets/destination-kalpitiya-dolphins.jpg.asset.json";
import kandy from "@/assets/destination-kandy-perahera.webp.asset.json";
import mirissa from "@/assets/destination-mirissa.jpg.asset.json";
import nagadeepa from "@/assets/destination-nagadeepa.avif.asset.json";
import nallur from "@/assets/destination-nallur.jpg.asset.json";
import negombo from "@/assets/destination-negombo-lagoon.jpg.asset.json";
import nilaveli from "@/assets/destination-nilaveli-snorkel.jpg.asset.json";
import nuwaraEliya from "@/assets/destination-nuwara-eliya-golf.jpg.asset.json";
import pasikuda from "@/assets/destination-pasikuda-aerial.webp.asset.json";
import polonnaruwa from "@/assets/destination-polonnaruwa-gal-vihara.jpg.asset.json";
import sigiriya from "@/assets/destination-sigiriya.jpg.asset.json";
import trincomalee from "@/assets/destination-trincomalee-koneswaram.jpg.asset.json";
import weligama from "@/assets/destination-weligama.jpg.asset.json";
import bentota from "@/assets/destination-bentota-turtle.jpg.asset.json";
import galleBeach from "@/assets/Galle_Beach.jpg.asset.json";
import teaPlantations from "@/assets/Tea_Plantations.jpg.asset.json";

const imageUrl = (asset: { url: string }) => asset.url;

/** A photo for every clickable place on the Explorer map. */
export const DESTINATION_IMAGES: Record<string, string> = {
  anuradhapura: imageUrl(anuradhapura),
  "arugam-bay": imageUrl(arugamBay),
  "bentota-area": imageUrl(bentota),
  colombo: imageUrl(colombo),
  dambulla: imageUrl(dambulla),
  delft: imageUrl(delftIsland),
  ella: imageUrl(ella),
  galle: imageUrl(galle),
  haputale: imageUrl(haputale),
  jaffna: imageUrl(jaffna),
  kalpitiya: imageUrl(kalpitiya),
  kandy: imageUrl(kandy),
  mirissa: imageUrl(mirissa),
  nagadeepa: imageUrl(nagadeepa),
  nallur: imageUrl(nallur),
  negombo: imageUrl(negombo),
  nilaveli: imageUrl(nilaveli),
  "nuwara-eliya": imageUrl(nuwaraEliya),
  pasikuda: imageUrl(pasikuda),
  polonnaruwa: imageUrl(polonnaruwa),
  sigiriya: imageUrl(sigiriya),
  tangalle: imageUrl(galleBeach),
  trincomalee: imageUrl(trincomalee),
  unawatuna: imageUrl(galleBeach),
  weligama: imageUrl(weligama),
};
