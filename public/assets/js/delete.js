const deleteBtn = $('#delete-btn');

const handleDeleteProject = (e) => {
  const currentTarget = $(e.currentTarget);
  const projectId = currentTarget.attr('data-id');
  console.log(projectId);
};

deleteBtn.on('click', handleDeleteProject);
