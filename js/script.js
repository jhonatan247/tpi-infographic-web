const modals = [
  { title: 'lorem', body: 'sdsdf sdf sdf sd fgsgsgsdgfsdfsdfsdf' },
  { title: 'lorem', body: 'sdsdf sdf sdf sd fgsgsgsdgfsdfsdfsdf' },
  { title: 'lorem', body: 'sdsdf sdf sdf sd fgsgsgsdgfsdfsdfsdf' },
  { title: 'lorem', body: 'sdsdf sdf sdf sd fgsgsgsdgfsdfsdfsdf' },
  { title: 'lorem', body: 'sdsdf sdf sdf sd fgsgsgsdgfsdfsdfsdf' },
  { title: 'lorem', body: 'sdsdf sdf sdf sd fgsgsgsdgfsdfsdfsdf' },
];

window.showModal = function (index) {
  $('#infoModalLabel').text(modals[index].title);
  $('#infoModalBody').text(modals[index].body);
  $('#infoModal').modal('show');
};
