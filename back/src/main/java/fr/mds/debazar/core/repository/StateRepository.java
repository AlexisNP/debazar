package fr.mds.debazar.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.State;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {

}
