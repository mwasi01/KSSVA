const videoUploadForm = document.getElementById('video-upload-form');
const videoUploadInput = document.getElementById('video-upload');
const videoDescriptionInput = document.getElementById('video-description');
const videoGallery = document.getElementById('video-gallery');

videoUploadForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const file = videoUploadInput.files[0];
  const description = videoDescriptionInput.value;
  if (file) {
    uploadVideo(file, description);
  }
});

function uploadVideo(videoFile, description) {
  const videoItem = document.createElement('div');
  videoItem.classList.add('video-item');

  const videoPlayer = document.createElement('video');
  videoPlayer.classList.add('video-player');
  videoPlayer.src = URL.createObjectURL(videoFile);
  videoPlayer.controls = true;

  const downloadButton = document.createElement('a');
  downloadButton.textContent = 'Download';
  downloadButton.classList.add('button');
  downloadButton.href = URL.createObjectURL(videoFile);
  downloadButton.download = 'video.mp4'; // Set default filename for download

  const videoDescription = document.createElement('p');
  videoDescription.textContent = description;

  videoItem.appendChild(videoPlayer);
  videoItem.appendChild(downloadButton);
  videoItem.appendChild(videoDescription);
  videoGallery.appendChild(videoItem);
}
