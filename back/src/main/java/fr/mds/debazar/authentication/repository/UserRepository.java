package fr.mds.debazar.authentication.repository;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.authentication.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	User getById(@Valid Long id);

}
