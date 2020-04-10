package fr.mds.debazar.authentication;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // Désactivation du contrôle CSRF
                .csrf().disable()
                
                // Activation du controle CORS avec le paramétrage de WebConfig
                .cors().and()

                // Autorisation des connexions anonymes (pour le login entre autres)
                .anonymous().and()

                // Application des droits de sécurité
                .authorizeRequests()
                
                // Accès sans aucune permission
                .antMatchers("/").permitAll()
                .antMatchers("/api/status").permitAll()
                .antMatchers(HttpMethod.OPTIONS, "/api/**").permitAll()
                .antMatchers("/api/authenticate/**").permitAll();
                
                /*
                 * Pour toutes les autres requêtes il faut être simplement authentifié. Pas
                 * besoin de rôles particuliers (pour lister les todos par exemple).
                 */
                // .anyRequest().authenticated().and()

                /*
                 * Filtre d'authentification. Pour l'URL spécifié on déclenche un filtre
                 * spécifique pour récupérer le username et le mot de passe saisi afin de
                 * vérifier l'authentification et de générer un token JWT transmis en réponse
                 * dans le header
                 */
                /*
                .addFilterBefore(new StatelessLoginFilter("/api/authenticate", tokenAuthenticationService,
                        authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                        */

                /*
                 * Filtre d'habilitation. Permet de reconstruire le contexte de sécurité Spring
                 * à partir d'un token JWT à extraire du header de la requête.
                 */
                /*
                .addFilterBefore(new StatelessAuthenticationFilter(
                        tokenAuthenticationService), UsernamePasswordAuthenticationFilter.class);
                        */
    }

}
