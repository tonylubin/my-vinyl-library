import { searchFunc, getTracks } from "@/database/musicLibrary";

export default async function handler(req, res) {
    let searchInput = req.query.searchTerm ;

    const searchResult =  searchInput ? await searchFunc(searchInput) : await getTracks();
    
    res.status(200).json(searchResult);
}