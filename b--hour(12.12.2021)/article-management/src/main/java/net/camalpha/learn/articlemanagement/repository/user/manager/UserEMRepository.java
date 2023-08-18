package net.camalpha.learn.articlemanagement.repository.user.manager;

import lombok.extern.slf4j.Slf4j;
import net.camalpha.learn.articlemanagement.model.user.entity.UserEntity;
import net.camalpha.learn.articlemanagement.repository.user.UserRepository;
import net.camalpha.learn.articlemanagement.repository.user.jpa.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
@Slf4j
public class UserEMRepository implements UserRepository {

    @Autowired
    private EntityManager entityManager;
    @Autowired
    private UserJpaRepository userJpaRepository;

    @Override
    public List<UserEntity> list(String query, Integer limit, Integer offset) {
        CriteriaBuilder builder = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<UserEntity> criteriaQuery = builder.createQuery(UserEntity.class);
        Root<UserEntity> root = criteriaQuery.from(UserEntity.class);
        criteriaQuery.select(root);
        if (query != null && !query.isEmpty()) {
            criteriaQuery.where(
                    builder.and(
                            builder.or(
                                    builder.like(root.get("name"), query),
                                    builder.like(root.get("address"), query),
                                    builder.like(root.get("phone"), query)
                            )

                    )
            );
        }
        TypedQuery<UserEntity> jpaQuery = this.entityManager.createQuery(criteriaQuery)
                .setMaxResults(limit)
                .setFirstResult(offset);
        List<UserEntity> users = jpaQuery.getResultList();
        return users;
    }

    @Override
    public Integer count(String query, Integer limit, Integer offset) {
        CriteriaBuilder builder = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<UserEntity> criteriaQuery = builder.createQuery(UserEntity.class);
        Root<UserEntity> root = criteriaQuery.from(UserEntity.class);
        criteriaQuery.select(root);
        if (query != null && !query.isEmpty()) {
            criteriaQuery.where(
                    builder.and(
                            builder.or(
                                    builder.like(root.get("name"), query),
                                    builder.like(root.get("address"), query),
                                    builder.like(root.get("phone"), query)
                            )

                    )
            );
        }
        TypedQuery<UserEntity> jpaQuery = this.entityManager.createQuery(criteriaQuery);
        return jpaQuery.getResultList().size();
    }

    @Override
    public UserEntity create(UserEntity entity) {
        return this.userJpaRepository.save(entity);
    }

    @Override
    public UserEntity get(Integer id) {
        return this.userJpaRepository.getById(id);
    }

    @Override
    public UserEntity update(Integer id, UserEntity entity) {
        entity.setId(id);
        return this.userJpaRepository.save(entity);
    }

    @Override
    public void delete(Integer id) {
        this.userJpaRepository.deleteById(id);
    }
}
