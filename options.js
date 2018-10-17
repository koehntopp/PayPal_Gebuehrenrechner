// Saves options to chrome.storage.sync.
function save_options() {
  var country = document.querySelector('input[name = "country"]:checked').value;
  chrome.storage.sync.set({
    Country: country,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('country');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    Country: '1'
  }, function(items) {
    document.getElementById('country').value = items.Country;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);