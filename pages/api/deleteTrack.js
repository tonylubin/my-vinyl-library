import { deleteTrack, getTrack } from "@/database/musicLibrary";

export default async function handler(req, res) {
    let dbId = req.query.trackId;

    let getTrackMsgInfo = async(songId) => {
        let req = await getTrack(songId);
        let { title , artist } = req;
        return {title, artist};
    }
    
    let {title, artist } = await getTrackMsgInfo(dbId);

    await deleteTrack(dbId);

    let message = `You successfully deleted ${title} by ${artist} from your music library!`;
    res.status(200).json(message);
}
