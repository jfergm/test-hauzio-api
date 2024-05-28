import { Router } from "express";
import Store from "../models/Store.js";

const router = Router()

router.post("/", async (req, res) => {
  try {
    console.log(req.body)
    if(!req.body.name || !req.body.location) {
      return res.status(400).json({"error": "Name and location are required"})
    }
    const newStore = new Store({...req.body})
    newStore.location.coordinates = [ req.body.location.lng, req.body.location.lat ]
    newStore.save()
    res.status(201).json(newStore)
  } catch(e) {
    console.log(e)
    res.json({"error": "Something went wrong"})
  }
})

router.get("/", async (_, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch(e) {
    res.json({"error": "something went wrong"})
  }
})

router.get("/:storeId", async (req, res) => {
  try {
    const store = await Store.findById(req.params.storeId)
    if(!store) {
      return res.status(404).json({"error": "Store not found"})
    }
    res.json(store)
  } catch(e) {
    console.log(e)
    res.json({"error": "Something went wrong"})
  }
})

router.patch("/:storeId", async (req, res) => {
  try {
    let store = await Store.findByIdAndUpdate(req.params.storeId, {...req.body}, { new: true })
    if(!store) {
      return res.status(404).json({"error": "Store not found"})
    }
    res.json(store)
  } catch(e) {
    res.json({error: "Something went wrong"})
  }
})

router.delete("/:storeId", async (req, res) => {
  try {
    const deleted = await Store.findByIdAndDelete(req.params.storeId)
    res.json({"message": "Deleted"})
  } catch(e) {
    console.log(e)
    res.json({error: "Something went wrong"})
  }
})



export default router
