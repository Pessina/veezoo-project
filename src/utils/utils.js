import Swal from 'sweetalert2';

export const removeRecursivelyFiletree = (filetree, id) => {
  // If its not a directory return the element
  if (!(filetree instanceof Array)) return filetree;

  // Remove the element if its on the current directory
  let temp = filetree.filter((el) => el.id !== id);

  // If not, recusivly check the filetree
  if (temp.length === filetree.length) {
    temp = filetree.map((el) => ({
      ...el,
      children: removeRecursivelyFiletree(el.children, id),
    }));
  }
  return temp;
};

export const updateRecursivelyFiletree = (filetree, file) => {
  // If its not a directory return the element
  if (!(filetree instanceof Array)) return filetree;

  // Update the element if its on the current directory
  let temp = filetree.map((el) => {
    if (el.id === file.id) return file;
    return el;
  });

  // If not, recusivly check the filetree
  if (!filetree.find((el) => el.id === file.id)) {
    temp = filetree.map((el) => ({
      ...el,
      children: updateRecursivelyFiletree(el.children, file),
    }));
  }

  return temp;
};

export const errorAlert = (message) => Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: `Error getting the filetree: ${message}`,
});

export const successAlert = (message) => Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: message,
  showConfirmButton: false,
  timer: 1500,
});
