package fr.mds.debazar.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
