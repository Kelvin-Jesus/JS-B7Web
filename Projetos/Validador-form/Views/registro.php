    
    <section>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="box">
            <div class="container">
                <div class="form">
                    <h2>Login Form</h2>
                    <form action="register_action.php" class="b7validator">
                        <label for="n" class="inputBox">
                            <input type="text" placeholder="Nome de Usuário" id="n" name="nome" data-rules="required|min=2">
                        </label>

                        <label for="e" class="inputBox">
                            <input type="email" name="email" placeholder="E-mail" id="e" data-rules="required|min=2">
                        </label>

                        <label for="s" class="inputBox">
                            <input type="password" placeholder="Senha" name="senha" id="s" data-rules="required|min=8">
                        </label>

                        <label for="s" class="inputBox">
                            <input type="submit" value="Logar" id="s">
                        </label>
                    </form>

                    <p class="forget">Já tem uma conta? <a href="index.html">Faça o Login</a></p>
                </div>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>