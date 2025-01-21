// Get the video and button elements
const video = document.getElementById("heroVideo")
const unmuteButton = document.getElementById("unmuteButton")

// Add an event listener to the button to enable sound
unmuteButton.addEventListener("click", () => {
  video.muted = false // Unmute the video
  video.play() // Ensure it continues playing with sound
})
