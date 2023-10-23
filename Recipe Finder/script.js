function findRecipes() {
    const ingredients = document.getElementById('ingredients').value.split(',').map(item => item.trim());

    if (ingredients.length > 0) {
        const recipeList = document.getElementById('recipeList');
        recipeList.innerHTML = '';

        ingredients.forEach(ingredient => {
            const recipe = document.createElement('div');
            recipe.classList.add('recipe');
            recipe.textContent = `Recipe using ${ingredient}:`;

            const ul = document.createElement('ul');
            const recipes = getRecipesForIngredient(ingredient);

            recipes.forEach(recipeName => {
                const li = document.createElement('li');
                li.textContent = recipeName;
                ul.appendChild(li);
            });

            recipe.appendChild(ul);
            recipeList.appendChild(recipe);
        });
    } else {
        alert('Please enter at least one ingredient.');
    }
}

function getRecipesForIngredient(ingredient) {
    // Simulated data (for demonstration purposes)
    const recipesData = {
        potato: ['Potato Soup', 'Mashed Potatoes', 'Potato Salad'],
        onion: ['French Onion Soup', 'Onion Rings', 'Caramelized Onions'],
        tomato: ['Tomato Soup', 'Caprese Salad', 'Tomato Pasta']
    };

    return recipesData[ingredient] || [];
}
