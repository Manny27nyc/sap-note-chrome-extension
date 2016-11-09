/*
Copyright 2014 Mitchell Barry

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var note_url = "https://launchpad.support.sap.com/#/notes/";
var search_url = "https://launchpad.support.sap.com/#/solutions/notes/?q=";

var searchButton = document.getElementById('btnSearch');
var noteInput = document.getElementById("note");

function handleSearch() {
  var userInput = noteInput.value;
  if (isNaN(userInput))
    search(userInput);
  else
    openNote(userInput);
}

function openNote(noteNumber) {
  var note = note_url + noteNumber;
  chrome.tabs.create({url: note});
}

function search(searchText) {
  var terms = encodeURIComponent(searchText);
  chrome.tabs.create({
    url: search_url + terms
  });
}

noteInput.addEventListener("keypress", function() {
  if (event.keyCode == 13) handleSearch();
});

searchButton.onclick = handleSearch;
noteInput.focus();
