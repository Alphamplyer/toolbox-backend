import { Router } from "express";
import  { nextCommand, previousCommand, stopCommand, togglePlayPauseCommand, volumeDownCommand, volumeMuteCommand, volumeUpCommand } from "../services/remote_commands_service";

const router: Router = Router();

router.post("/togglePlayPause", (req, res) => {
  console.log("[server]: togglePlayPause")
  togglePlayPauseCommand()
  res.status(200).send();
});

router.post("/stop", (req, res) => {
  console.log("[server]: stop")
  stopCommand()
  res.status(200).send();
});

router.post("/next", (req, res) => {
  console.log("[server]: next")
  nextCommand()
  res.status(200).send();
});

router.post("/previous", (req, res) => {
  console.log("[server]: previous")
  previousCommand()
  res.status(200).send();
});

router.post("/volume/up", (req, res) => {
  console.log("[server]: volumeUp")
  volumeUpCommand()
  res.status(200).send();
});

router.post("/volume/down", (req, res) => {
  console.log("[server]: volumeDown")
  volumeDownCommand()
  res.status(200).send();
});

router.post("/volume/mute", (req, res) => {
  console.log("[server]: volumeMute")
  volumeMuteCommand()
  res.status(200).send();
});

export const remoteCommandsRouter: Router = router;