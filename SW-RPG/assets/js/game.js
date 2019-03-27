$(function(){
  let heroes = ["Han Solo", "Luke Skywalker"],
      villains = ["Boba Fett", "Darth Vader"];

  let attackPower,
      selectedHero,
      selectedVillain;

  let BobaFett = {
    class:      "Villain",
    hp:         150,
    attackMax:  25,
    getHP: function() {
      return this.hp;
    },
    getAttack: function() {
      return Math.floor(Math.random() * (this.attackMax - 1)) + 1;
    }
  }
  let DarthVader = {
    class:      "Villain",
    hp:         200,
    attackMax:  30,
    getHP: function() {
      return this.hp;
    },
    getAttack: function() {
      return Math.floor(Math.random() * (this.attackMax - 1)) + 1;
    }
  }
  let HanSolo = {
    class:      "Hero",
    hp:         90,
    attackMax:  20,
    getHP: function() {
      return this.hp;
    },
    getAttack: function() {
      return Math.floor(Math.random() * (this.attackMax - 1)) + 1;
    }
  }
  let LukeSkywalker = {
    class:      "Hero",
    hp:         125,
    attackMax:  20,
    getHP: function() {
      return this.hp;
    },
    getAttack: function() {
      return Math.floor(Math.random() * (this.attackMax - 1)) + 1;
    }
  }
  const attack = (player, enemy) => {

  }
  const displayStats = (selector, player) => {
    let template;
    switch (player) {
      case "Boba Fett":
        template = `<div class="lifeBar">
                      <div style="width: calc(100% - 4px)"></div>
                    </div>
                    <div class="d-flex row">
                      <div class="col-8">${player}</div>
                      <div class="col-4 hpCount space-mono text-right">${BobaFett.getHP()}</div>
                    </div>`;
        $(selector).find('.stats').html(template);
        break;
      case "Darth Vader":
        template = `<div class="lifeBar">
                      <div style="width: calc(100% - 4px)"></div>
                    </div>
                    <div class="d-flex row">
                      <div class="col-8">${player}</div>
                      <div class="col-4 hpCount space-mono text-right">${DarthVader.getHP()}</div>
                    </div>`;
        $(selector).find('.stats').html(template);
        break;
      case "Han Solo":
        template = `<div class="lifeBar">
                      <div style="width: calc(100% - 4px)"></div>
                    </div>
                    <div class="d-flex row">
                      <div class="col-8">${player}</div>
                      <div class="col-4 hpCount space-mono text-right">${HanSolo.getHP()}</div>
                    </div>`;
        $(selector).find('.stats').html(template);
        break;
      case "Luke Skywalker":
        template = `<div class="lifeBar">
                      <div style="width: calc(100% - 4px)"></div>
                    </div>
                    <div class="d-flex row">
                      <div class="col-8">${player}</div>
                      <div class="col-4 hpCount space-mono text-right">${LukeSkywalker.getHP()}</div>
                    </div>`;
        $(selector).find('.stats').html(template);
        break;
    }
  }
  const selectCharacter = (selector, player) => {
    let template = `<img src="assets/images/${player.replace(" ", "-").toLowerCase()}.jpg" alt="${player}" class="border border-light">`; 
    $(selector).find("figure").html(template);
  }

  // render heroes list items
  $.each(heroes, (index, value) => {
    let template =
      `<li class="mr-3">
        <a href="#" class="character" title="${value}" data-character="${value}" data-character-type="hero">
          <img src="assets/images/${value.replace(" ", "-").toLowerCase()}.jpg" alt="${value}" class="border border-secondary">
        </a>
      </li>`;
    $("#heroes").append(template);
  });
  // render villain list items
  $.each(villains, (index, value) => {
    let template = 
      `<li class="mr-3">
        <a href="#" class="character" title="${value}" data-character="${value}" data-character-type="villain">
          <img src="assets/images/${value.replace(" ", "-").toLowerCase()}.jpg" alt="${value}" class="border border-secondary">
        </a>
      </li>`;
    $("#villains").append(template);
  });
  // character select
  $(".character").on("click", (event) => {
    event.preventDefault();
    if (event.currentTarget.dataset.characterType === "hero") {
      selectCharacter(".hero", event.currentTarget.dataset.character);
      $(".controls").removeClass("hide");
      selectedHero = event.currentTarget.dataset.character;
      displayStats(".hero", selectedHero);
    }
    if (event.currentTarget.dataset.characterType === "villain") {
      selectCharacter(".villain", event.currentTarget.dataset.character);
      selectedVillain = event.currentTarget.dataset.character;
      displayStats(".villain", selectedVillain);
    }
  });
  // attack!
  $("#Attack").on("click", (event, attackPower) => {
    event.preventDefault();
    if (selectedVillain == null) {
      alert("Select a villain first");
    } else {
      console.log("attack! " + attackPower);
    }
  });
});