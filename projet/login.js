$(document).ready(function() {
    // Charger la liste des utilisateurs depuis la base de données
    loadUserList();
  
    // Fonction pour charger la liste des utilisateurs
    function loadUserList() {
      $.ajax({
        url: 'get_users.php',
        method: 'GET',
        success: function(response) {
          $('#userList').html(response);
        }
      });
    }
  
    // Fonction pour valider un compte utilisateur
    $(document).on('click', '.validate-btn', function() {
      var userId = $(this).data('user-id');
  
      $.ajax({
        url: 'validate_user.php',
        method: 'POST',
        data: { userId: userId },
        success: function(response) {
          alert(response);
          loadUserList();
        }
      });
    });
  
    // Fonction pour rayer un compte utilisateur
    $(document).on('click', '.delete-btn', function() {
      var userId = $(this).data('user-id');
  
      $.ajax({
        url: 'delete_user.php',
        method: 'POST',
        data: { userId: userId },
        success: function(response) {
          alert(response);
          loadUserList();
        }
      });
    });
  
    // Fonction pour réinitialiser le mot de passe d'un utilisateur
    $(document).on('click', '.reset-password-btn', function() {
      var userId = $(this).data('user-id');
  
      $.ajax({
        url: 'reset_password.php',
        method: 'POST',
        data: { userId: userId },
        success: function(response) {
          alert(response);
        }
      });
    });
  });
  




signup.js


$(document).ready(function() {
    $('#signupForm').submit(function(event) {
      event.preventDefault();
      var email = $('#email').val();
      var password = $('#password').val();
  
      // Envoyer les données du formulaire au serveur avec une requête AJAX
      $.ajax({
        url: 'signup.php',
        method: 'POST',
        data: { email: email, password: password },
        success: function(response) {
          alert(response);
        }
      });
    });
  });