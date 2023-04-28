import { capitaliseWord } from "@/utils/utilityFuncs";
import { addTrack } from "@/database/musicLibrary";

export default async function handler(req,res) {

    let {title, artist, album, genre, year} = req.body;

    await addTrack(title, artist, album, genre, year);

    title = capitaliseWord(title);
    artist = capitaliseWord(artist);

    return res.status(200).send({title, artist})
};