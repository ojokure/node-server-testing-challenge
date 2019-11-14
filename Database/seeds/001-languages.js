exports.seed = function(knex) {
  return knex("languages")
    .truncate()
    .then(function() {
      return knex("languages").insert([
        { id: 1, language: "React", end: "front" },
        { id: 2, language: "Nodejs", end: "back" },
        { id: 3, language: "Java", end: "back" }
      ]);
    });
};
