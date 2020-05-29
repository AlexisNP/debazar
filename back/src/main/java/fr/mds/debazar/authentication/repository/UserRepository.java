package fr.mds.debazar.authentication.repository;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.authentication.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    User getById(@Valid Long id);

    @Query("SELECT u FROM User u WHERE u.mail_address = :mail")
    User findByMailAddress(@Param("mail") String mail);

    @Query("SELECT u FROM User u WHERE u.username = :username")
    User getByUsername(@Param("username") String username);

}
