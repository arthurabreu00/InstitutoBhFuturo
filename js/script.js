$('.form-contato').validator();

$('.form-submit').click(event => {
    event.preventDefault();
});

twttr.widgets.createTimeline(
    {
      sourceType: "bhfuturo",
      screenName: "bhfuturo"
    },
    document.getElementById("container")
  );