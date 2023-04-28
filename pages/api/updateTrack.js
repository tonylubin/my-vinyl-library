import { updateTrack } from "@/database/musicLibrary";

export default async function handler(req,res) {

    let { title, artist, album, genre, year, id } = req.body;

    await updateTrack(title, artist, album, genre, year, id);

    return res.status(200).json({title});
};