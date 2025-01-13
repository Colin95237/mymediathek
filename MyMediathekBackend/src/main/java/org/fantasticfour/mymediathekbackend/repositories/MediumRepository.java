package org.fantasticfour.mymediathekbackend.repositories;

import org.fantasticfour.mymediathekbackend.entities.Medium;
import org.fantasticfour.mymediathekbackend.entities.Type;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MediumRepository extends JpaRepository <Medium,Long> {
    List<Medium> findAllByTypeId(Long id);

}
