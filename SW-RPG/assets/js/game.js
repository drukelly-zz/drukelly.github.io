// NOTE
// A very "sticky" approach to the game
// Search down for ADD HEROES HERE or ADD VILLAINS HERE
// for repeatable blocks
// TODO
// Research and refactor to make switch cases code blocks dynamic
// Not sure I'm digging these `switch` code blocks

$(function(){
  let heroes = ["Han Solo", "Princess Leia", "Luke Skywalker"],
      villains = ["Boba Fett", "Darth Vader"];
  let hps = {},
      damages = {},
      selectedHero,
      selectedVillain;
  let BobaFett = {
    class:      "Villain",
    hp:         100,
    attackMax:  20,
    getHP: function() {
      return this.hp;
    },
    getAttack: function() {
      return Math.floor(Math.random() * (this.attackMax - 1)) + 1;
    }
  }
  let DarthVader = {
    class:      "Villain",
    hp:         150,
    attackMax:  20,
    getHP: function() {
      return this.hp;
    },
    getAttack: function() {
      return Math.floor(Math.random() * (this.attackMax - 1)) + 1;
    }
  }
  let HanSolo = {
    class:      "Hero",
    hp:         100,
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
  let PrincessLeia = {
    class:      "Hero",
    hp:         125,
    attackMax:  25,
    getHP: function() {
      return this.hp;
    },
    getAttack: function() {
      return Math.floor(Math.random() * (this.attackMax - 1)) + 1;
    }
  }
  // attack
  // takes two  args: player and enemy
  const attack = (player, enemy) => {
    let template,
        playerHPAttack,
        enemyHPAttack;
    // ADD HEROES HERE
    switch (player) {
      case "Han Solo":
        playerHPAttack = HanSolo.getAttack();
        break;
      case "Luke Skywalker":
        playerHPAttack =  LukeSkywalker.getAttack();
        break;
      case "Princess Leia":
        playerHPAttack =  PrincessLeia.getAttack();
        break;
    }
    // ADD VILLAINS HERE
    switch (enemy) {
      case "Boba Fett":
        enemyHPAttack =  BobaFett.getAttack();
        break;
      case "Darth Vader":
        enemyHPAttack =  DarthVader.getAttack();
        break;
    }
    template = `<li>
                  <strong class="playerLabel">${player}</strong> attacked <strong class="enemyLabel">${enemy}</strong> for <span class="badge badge-success">${playerHPAttack}</span>
                </li>`;
    template += `<li class="text-right">
                  <strong class="enemyLabel">${enemy}</strong> attacked <strong class="playerLabel">${player}</strong> for <span class="badge badge-danger">${enemyHPAttack}</span>
                </li>`;
    $("#playByPlay").append(template);
    if (playerHPAttack) damages["player"] = playerHPAttack;
    if (enemyHPAttack) damages["enemy"] = enemyHPAttack;
    return damages;
  }
  // displays stats
  // takes two args: the target selector and selected player
  const displayStats = (selector, player) => {
    let template;
    switch (player) {
      // ADD VILLAINS HERE
      case "Boba Fett":
        template = `<div id="BobaFett" class="lifeBar">
                      <div style="width: calc(100% - 4px)"></div>
                    </div>
                    <div class="d-flex row">
                      <div class="col-8">${player}</div>
                      <div class="col-4 hpCount space-mono text-right">${BobaFett.getHP()}</div>
                    </div>`;
        $(selector).find('.stats').html(template);
        break;
      case "Darth Vader":
        template = `<div id="DarthVader" class="lifeBar">
                      <div style="width: calc(100% - 4px)"></div>
                    </div>
                    <div class="d-flex row">
                      <div class="col-8">${player}</div>
                      <div class="col-4 hpCount space-mono text-right">${DarthVader.getHP()}</div>
                    </div>`;
        $(selector).find('.stats').html(template);
        break;
      // ADD HEROES HERE
      case "Han Solo":
        template = `<div id="HanSolo" class="lifeBar">
                      <div style="width: calc(100% - 4px)"></div>
                    </div>
                    <div class="d-flex row">
                      <div class="col-8">${player}</div>
                      <div class="col-4 hpCount space-mono text-right">${HanSolo.getHP()}</div>
                    </div>`;
        $(selector).find('.stats').html(template);
        break;
      case "Luke Skywalker":
        template = `<div id="LukeSkywalker" class="lifeBar">
                      <div style="width: calc(100% - 4px)"></div>
                    </div>
                    <div class="d-flex row">
                      <div class="col-8">${player}</div>
                      <div class="col-4 hpCount space-mono text-right">${LukeSkywalker.getHP()}</div>
                    </div>`;
        $(selector).find('.stats').html(template);
        break;
      case "Princess Leia":
        template = `<div id="PrincessLeia" class="lifeBar">
                      <div style="width: calc(100% - 4px)"></div>
                    </div>
                    <div class="d-flex row">
                      <div class="col-8">${player}</div>
                      <div class="col-4 hpCount space-mono text-right">${PrincessLeia.getHP()}</div>
                    </div>`;
        $(selector).find('.stats').html(template);
        break;
    }
  }
  // remove character
  const removeCharacter = (player) => {
    $(`a[title="${player}"]`).parent().remove();
  }
  // update figure tag with the selected character
  const selectCharacter = (selector, player) => {
    let template = `<img src="assets/images/${player.replace(" ", "-").toLowerCase()}.jpg" alt="${player}" class="border border-light">`; 
    $(selector).find("figure").html(template);
  }
  // store HPs into memory
  const storeHPs = (character) => {
    let playerHP,
        enemyHP;
    switch (character) {
      // ADD HEROES HERE
      case "Han Solo":
        playerHP = HanSolo.getHP();
        break;
      case "Luke Skywalker":
        playerHP = LukeSkywalker.getHP();
        break;
      case "Princess Leia":
        playerHP = PrincessLeia.getHP();
        break;
      // ADD VILLAINS HERE
      case "Boba Fett":
        enemyHP = BobaFett.getHP();
        break;
      case "Darth Vader":
        enemyHP = DarthVader.getHP();
        break;
    }
    if (playerHP) hps["player"] = playerHP;
    if (enemyHP) hps["enemy"] = enemyHP;
    return hps;
  }
  // update HP based on attack interaction
  const updateHP = (player, enemy) => {
    let playerPlaceholder = $(`#${player.replace(" ", "")}`);
    let enemyPlaceholder = $(`#${enemy.replace(" ", "")}`);
    // update player hp bar
    // get total hp first
    let playerTotalHP,
        enemyTotalHP;
    // ADD HEROES HERE
    switch (player) {
      case "Han Solo":
        playerTotalHP = HanSolo.getHP(); 
        break;
      case "Luke Skywalker":
        playerTotalHP = LukeSkywalker.getHP();
        break;
      case "Princess Leia":
        playerTotalHP = PrincessLeia.getHP();
        break;
    }
    // ADD VILLAINS HERE
    switch (enemy) {
      case "Boba Fett":
        enemyTotalHP = BobaFett.getHP(); 
        break;
      case "Darth Vader":
        enemyTotalHP = DarthVader.getHP();
    }
    // calculate and reduce hp based on inflicted damage
    // holy back ticks, curly braces, square brackets and parentheses!
    let playerDamaged = (hps["player"]/playerTotalHP)*100;
    playerPlaceholder
      .children().css({"width" : `calc(${playerDamaged}% - 4px)`});
    let enemyDamaged = (hps["enemy"]/enemyTotalHP)*100;
    enemyPlaceholder
      .children().css({"width" : `calc(${enemyDamaged}% - 4px)`});
    // update hp text
    playerPlaceholder.next().find(".hpCount").text(hps["player"]);
    enemyPlaceholder.next().find(".hpCount").text(hps["enemy"]);
  }
  // render heroes list items
  $.each(heroes, (index, value) => {
    let template =
      `<li>
        <a href="#" class="character" title="${value}" data-character="${value}" data-character-type="hero">
          <img src="assets/images/${value.replace(" ", "-").toLowerCase()}.jpg" alt="${value}" class="border border-light img-fluid">
        </a>
      </li>`;
    $("#heroes").append(template);
  });
  // render villain list items
  $.each(villains, (index, value) => {
    let template = 
      `<li>
        <a href="#" class="character" title="${value}" data-character="${value}" data-character-type="villain">
          <img src="assets/images/${value.replace(" ", "-").toLowerCase()}.jpg" alt="${value}" class="border border-light img-fluid">
        </a>
      </li>`;
    $("#villains").append(template);
  });
  // character select on click
  $(".character").on("click", (event) => {
    event.preventDefault();
    if (event.currentTarget.dataset.characterType === "hero") {
      selectCharacter(".hero", event.currentTarget.dataset.character);
      $(".controls").removeClass("hide");
      selectedHero = event.currentTarget.dataset.character;
      displayStats(".hero", selectedHero);
      storeHPs(selectedHero);
    }
    if (event.currentTarget.dataset.characterType === "villain") {
      selectCharacter(".villain", event.currentTarget.dataset.character);
      selectedVillain = event.currentTarget.dataset.character;
      displayStats(".villain", selectedVillain);
      storeHPs(selectedVillain);
    }
  });
  // attack!
  $("#Attack").on("click", (event) => {
    event.preventDefault();
    if (selectedVillain == null) {
      alert("Select a villain first");
    } else {
      attack(selectedHero, selectedVillain);
      hps["player"] = hps["player"]-damages["enemy"];
      hps["enemy"] = hps["enemy"]-damages["player"];
      updateHP(selectedHero, selectedVillain);
      if (hps["player"] < 0) {
        hps["player"] = 0;
        updateHP(selectedHero, selectedVillain);
        removeCharacter(selectedHero);
        template = `<li>
                      <strong class="enemyLabel">${selectedVillain}</strong> defeated <strong class="playerLabel">${selectedHero}</strong>
                    </li>`
        $("#playByPlay").html(template);
      }
      if (hps["enemy"] < 0) {
        hps["enemy"] = 0;
        updateHP(selectedHero, selectedVillain);
        removeCharacter(selectedVillain);
        template = `<li>
                      <strong class="playerLabel">${selectedHero}</strong> defeated <strong class="enemyLabel">${selectedVillain}</strong>
                    </li>`
        $("#playByPlay").html(template);
      }
      if ($("#heroes").children().length === 0 || $("#villains").children().length === 0) {
        $("#Reset").removeClass("hide");
      }
    }
  });
  // reset!
  $("#Reset").on("click", (event) => {
    window.location.reload(true);
    window.scrollY === 0;
  });
});