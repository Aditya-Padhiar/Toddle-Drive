//This function render file cards
function render_folders(folders) {
  localStorage.setItem("folder", folders);
  var folder_cards_render_section = document.querySelector(
    ".folder-cards-rendering-section"
  );

  folder_cards_render_section.innerHTML = ``;

  var modals_render_section = document.querySelector(
    ".folder-modals-rendering-section"
  );

  modals_render_section.innerHTML = ``;

  var render_number_of_folders = document.querySelector(
    ".render-number-of-folders"
  );

  render_number_of_folders.innerHTML = `
  <p class="folder-section-heading">${folders.length} folders</p>
`;

  for (var i = folders.length - 1; i >= 0; i--) {
    var rendered_cards = document.querySelector(
      ".folder-cards-rendering-section"
    ).innerHTML;

    var rendered_modals = document.querySelector(
      ".folder-modals-rendering-section"
    ).innerHTML;

    folder_cards_render_section.innerHTML =
      `
  <div class="col s12 m4 l3">
            <div class="my-card">
              <div class="icon-layer valign-wrapper">
                <img class="card-icon" src="./assests/Folder-icon.svg" alt="" />
              </div>
              <div class="bottom-layer valign-wrapper">
                <p class="left-align">${folders[i]}</p>
                <a href="#!" class="dropdown-trigger" data-target="dropdown${i}">
                  <img
                    src="./assests/resources/DotsVerticalO.svg"
                    alt=""
                    class="responsive-img"
                    style="margin-top: 0.5rem"
                  />
                </a>
                <ul id="dropdown${i}" class="dropdown-content">
                  <li>
                    <a
                      class="valign-wrapper modal-trigger"
                      href="#modal${i}-rename"
                      ><img
                        class="popup-icon"
                        src="./assests/rename-folder.svg"
                        alt=""
                      />
                      Rename folder</a
                    >
                  </li>
                  <li>
                    <a href="#!" class="valign-wrapper"
                      ><img
                        class="popup-icon"
                        src="./assests/duplicate-folder.svg"
                        alt=""
                      />
                      Duplicate folder</a
                    >
                  </li>
                  <li>
                    <a
                      class="valign-wrapper modal-trigger"
                      href="#modal${i}-delete"
                      ><span class="red-dropdown"
                        ><img
                          class="popup-icon"
                          src="./assests/delete-folder.svg"
                          alt=""
                        />
                        Delete folder</span
                      ></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
  ` + rendered_cards;

    modals_render_section.innerHTML =
      `
    <div id="modal${i}-rename" class="modal">
      <form id="folder-rename-modal${i}">
        <div class="modal-content">
          <h4>Rename Folder</h4>
          <p>New folder name</p>
          <input value="${folders[i]}" class="rename" id="rename${i}" type="text"   class="validate" />
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close btn-flat cancel center-align">Cancel</a>
          <input type="submit" value="Rename Folder" class="modal-close btn-flat center-align"></input>
        </div>
      </form>
    </div>

    <div id="modal${i}-delete" class="modal">
      <form id="delete-folder-modal${i}">
        <div class="modal-content">
          <h4>Delete "${folders[i]}" Folder</h4>
          <p class="delete-p">
            Are you sure you want to delete this folder? This is a permanent
            action and can’t be undone.
          </p>
        </div>
        <div class="modal-footer delete-footer">
          <a href="#!" class="modal-close btn-flat cancel center-align">Cancel</a>
          <input type="submit" value="Delete Folder" class="modal-close btn-flat delete center-align"
            >
        </div>
      </form>
    </div>

  ` + rendered_modals;
  }

  $(".modal").modal();
  $(".dropdown-trigger").dropdown({ alignment: "right", coverTrigger: false });
}

//This function render file cards
function render_files(files, filetype) {
  localStorage.setItem("file", files);
  localStorage.setItem("filetypes", filetype);
  var file_cards_render_section = document.querySelector(
    ".file-cards-rendering-section"
  );

  file_cards_render_section.innerHTML = ``;

  var modals_render_section = document.querySelector(
    ".files-modals-rendering-section"
  );

  modals_render_section.innerHTML = ``;

  var render_number_of_files = document.querySelector(
    ".render-number-of-files"
  );

  render_number_of_files.innerHTML = `
  <p class="file-section-heading">${files.length} files</p>
`;

  for (var i = files.length - 1; i >= 0; i--) {
    var rendered_cards = document.querySelector(
      ".file-cards-rendering-section"
    ).innerHTML;

    var rendered_modals = document.querySelector(
      ".files-modals-rendering-section"
    ).innerHTML;

    file_cards_render_section.innerHTML =
      `
    <div class="col s12 m4 l3">
          <div class="my-card">
            <div class="icon-layer-filetype-${filetype[i]} valign-wrapper">
              <img
                class="card-icon"
                src="./assests/resources/File-${filetype[i]}.svg"
                alt=""
              />
            </div>
            <div class="bottom-layer valign-wrapper">
              <div class="left-align">
                <p>${filetype[i]}</p>
                <h5>${files[i]}</h5>
              </div>

              <a
                
                class="dropdown-trigger valign-wrapper"
                style="margin-top: 1.2rem"
                data-target="dropdown${i}-file"
              >
                <img
                  src="./assests/resources/DotsVerticalO.svg"
                  alt=""
                  class="responsive-img"
                />
              </a>
              <ul id="dropdown${i}-file" class="dropdown-content">
                <li>
                  <a
                    class="valign-wrapper modal-trigger"
                    href="#modal${i}-rename-file"
                    ><img
                      class="popup-icon"
                      src="./assests/rename-folder.svg"
                      alt=""
                    />
                    Rename file</a
                  >
                </li>
                <li>
                  <a href="#!" class="valign-wrapper"
                    ><img
                      class="popup-icon"
                      src="./assests/duplicate-folder.svg"
                      alt=""
                    />
                    Duplicate file</a
                  >
                </li>
                <li>
                  <a
                    class="valign-wrapper modal-trigger"
                    href="#modal${i}-delete-file"
                    ><span class="red-dropdown"
                      ><img
                        class="popup-icon"
                        src="./assests/delete-folder.svg"
                        alt=""
                      />
                      Delete file</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
    ` + rendered_cards;

    modals_render_section.innerHTML =
      `
    <div id="modal${i}-rename-file" class="modal">
      <form id="rename-file-modal${i}">
        <div class="modal-content">
          <h4>Rename File</h4>
          <p>Name of the file</p>
          <input
            value="${files[i]}"
            id="rename-file${i}"
            type="text"
            class="validate"
            style="width:30.6rem"
          />
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close btn-flat cancel center-align">Cancel</a>
          <input type="submit" value="Rename File" class="modal-close btn-flat center-align"></input>
        </div>
      </form>
    </div>

    <div id="modal${i}-delete-file" class="modal">
      <form id="delete-file${i}">
        <div class="modal-content">
          <h4>Delete "${files[i]}" File</h4>
          <p class="delete-p">
            Are you sure you want to delete this file? This is a permanent action
            and can’t be undone.
          </p>
        </div>
        <div class="modal-footer delete-footer">
          <a href="#!" class="modal-close btn-flat cancel center-align">Cancel</a>
          <input type="submit" value="Delete File" class="modal-close btn-flat delete center-align"
            >
        </div>
      </form>
    </div>
  ` + rendered_modals;
  }
  $(".modal").modal();
  $(".dropdown-trigger").dropdown({ alignment: "right", coverTrigger: false });
}

function render_numbers(folders, files) {
  var render_numbers = document.querySelector(".render-numbers");

  render_numbers.innerHTML = `
  <p class="file-and-folder-number">${folders.length} Folder, ${files.length} Files</p>
`;
}

function add_new_file(folders, files, filetype, new_file, new_filetype) {
  files = new_file.concat(files);
  filetype = new_filetype.concat(filetype);
  render_files(files, filetype);
  render_numbers(folders, files);
  return [files, filetype];
}

function add_new_folder(folders, files, new_folder) {
  folders = new_folder.concat(folders);
  render_folders(folders);
  render_numbers(folders, files);
  return folders;
}

function delete_folder(folders, files, i) {
  folders.splice(i, 1);
  render_folders(folders);
  render_numbers(folders, files);
  return folders;
}

function delete_file(folders, files, filetype, i) {
  files.splice(i, 1);
  filetype.splice(i, 1);
  render_files(files, filetype);
  render_numbers(folders, files);
  return [files, filetype];
}

function rename_folder(folders, files, i, new_name) {
  folders[i] = new_name;
  render_folders(folders);
  render_numbers(folders, files);
  return folders;
}

function rename_file(folders, files, filetype, i, new_name) {
  files[i] = new_name;

  render_files(files, filetype);
  render_numbers(folders, files);
  return files;
}

/*Variables */

var defaultfolders = ["Day 1", "Day 2", "Day 3"];
var defaultfiles = [
  "Registration Form",
  "About Toddle",
  "Todo List",
  "Course Details",
];
var defaultfiletype = ["PDF", "PPT", "DOC", "PDF"];

if (localStorage.getItem("folder") === null) {
  localStorage.setItem("folder", defaultfolders);
  localStorage.setItem("file", defaultfiles);
  localStorage.setItem("filetypes", defaultfiletype);
}

if (
  localStorage.getItem("folder") !== "" &&
  localStorage.getItem("folder") != "undefined"
) {
  var folders = localStorage.getItem("folder").split(",");
} else {
  var folders = [];
}

if (
  localStorage.getItem("file") !== "" &&
  localStorage.getItem("file") != "undefined"
) {
  var files = localStorage.getItem("file").split(",");
  var filetype = localStorage.getItem("filetypes").split(",");
} else {
  var files = [];
  var filetype = [];
}

render_folders(folders);
render_files(files, filetype);
render_numbers(folders, files);

var new_file_event = document.querySelector("#form-new-file");

new_file_event.addEventListener("submit", function (event) {
  event.preventDefault();
  var file_name = document.querySelector("#new-file-name").value;
  document.querySelector("#new-file-name").value = "";
  var new_file_type;
  [file_name, new_file_type] = file_name.split(".");

  new_file_type = new_file_type.toUpperCase();

  [files, filetype] = add_new_file(
    folders,
    files,
    filetype,
    [file_name],
    [new_file_type]
  );
});

var new_folder_event = document.querySelector("#form-new-folder");

new_folder_event.addEventListener("submit", function (event) {
  event.preventDefault();
  var folder_name = document.querySelector("#new-folder-name").value;
  document.querySelector("#new-folder-name").value = "";
  folders = add_new_folder(folders, files, [folder_name]);
});

var filesSection = document.querySelector(".files-modals-rendering-section");
filesSection.addEventListener("submit", modifyfiles, false);

function modifyfiles(e) {
  e.preventDefault();
  console.log(e.target.id[0]);
  if (e.target.id[0] == "d") {
    var i = e.target.id[e.target.id.length - 1];
    [files, filetype] = delete_file(folders, files, filetype, i);
  } else if (e.target.id[0] == "r") {
    var i = e.target.id[e.target.id.length - 1];
    var newname = document.getElementById(e.target[0].id).value;
    console.log(newname);
    files = rename_file(folders, files, filetype, i, newname);
  }

  e.stopPropagation();
}

var foldersSection = document.querySelector(".folder-modals-rendering-section");
foldersSection.addEventListener("submit", modifyfolders, false);

function modifyfolders(e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.id[0] == "d") {
    var i = e.target.id[e.target.id.length - 1];
    folders = delete_folder(folders, files, i);
  } else if (e.target.id[0] == "f") {
    var i = e.target.id[e.target.id.length - 1];
    var newname = document.getElementById(e.target[0].id).value;
    folders = rename_folder(folders, files, i, newname);
  }

  e.stopPropagation();
}
