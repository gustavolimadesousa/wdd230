document.addEventListener('DOMContentLoaded', function() {
  const banner = document.getElementById('banner');
  const closeBtn = document.getElementById('closeBtn');
  
  // Check if it's Monday, Tuesday, or Wednesday
  const today = new Date().getDay();
  const showBannerDays = [1, 2, 3]; // Monday, Tuesday, Wednesday
  
  if (showBannerDays.includes(today)) {
    banner.style.display = 'block';
  }
  
  // Add event listener to close button
  closeBtn.addEventListener('click', function() {
    banner.style.display = 'none';
  });
});
