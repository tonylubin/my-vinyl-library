import { getTrack } from "@/database/musicLibrary"

export default async function handler(req, res) {
    let trackId = req.query.id ;
    const track = await getTrack(trackId);
    res.status(200).json(track);
}
