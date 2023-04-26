import robot from 'robotjs';
import { KeyCode } from '../utils/key_code';

export function togglePlayPauseCommand() {
  robot.keyTap(KeyCode.audio_play);
}

export function stopCommand() {
  robot.keyTap(KeyCode.audio_stop);
}

export function nextCommand() {
  robot.keyTap(KeyCode.audio_next);
}

export function previousCommand() {
  robot.keyTap(KeyCode.audio_prev);
}

export function volumeUpCommand() {
  robot.keyTap(KeyCode.audio_vol_up);
}

export function volumeDownCommand() {
  robot.keyTap(KeyCode.audio_vol_down);
}

export function volumeMuteCommand() {
  robot.keyTap(KeyCode.audio_mute);
}
