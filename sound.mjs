const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const playSound = (frequency = 440, duration = 2) => {
  const osc = audioCtx.createOscillator();
  const envelope = audioCtx.createGain();
  osc.connect(envelope);
  envelope.connect(audioCtx.destination);

  envelope.gain.setValueAtTime(0, audioCtx.currentTime);
  // low value because of overlapping sounds at a time
  envelope.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05);
  envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration - 0.05);

  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
};

export {playSound};