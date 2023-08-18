package net.camalpha.learn.articlemanagement.repository.user.jdbc;

import lombok.extern.slf4j.Slf4j;
import net.camalpha.learn.articlemanagement.model.user.entity.UserEntity;
import net.camalpha.learn.articlemanagement.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Primary
@Repository
@Slf4j
public class UserJdbcRepository implements UserRepository {

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public List<UserEntity> list(String query, Integer limit, Integer offset) {
        String sql = "SELECT * FROM \"tb_user\"";
        MapSqlParameterSource params = new MapSqlParameterSource();
        if (query != null && !query.isEmpty()) {
            sql += " WHERE (name ILIKE :query OR address ILIKE :query OR phone ILIKE :query)";
            params.addValue("query", query);
        }
        sql += " LIMIT :limit OFFSET :offset";
        params.addValue("limit", limit);
        params.addValue("offset", offset);
        try {
            return this.jdbcTemplate.query(sql, params, UserJdbcMapper.userRowMapper());
        } catch (Exception e) {
            log.error("{}", e);
            return new ArrayList<>();
        }
    }

    @Override
    public Integer count(String query, Integer limit, Integer offset) {
        String sql = "SELECT COUNT(*) FROM \"tb_user\"";
        MapSqlParameterSource params = new MapSqlParameterSource();
        if (query != null && !query.isEmpty()) {
            sql += " WHERE (name ILIKE :query OR address ILIKE :query OR phone ILIKE :query)";
            params.addValue("query", query);
        }

        try {
            return this.jdbcTemplate.queryForObject(sql, params, Integer.class);
        } catch (Exception e) {
            log.error("{}", e);
            return 0;
        }
    }

    @Override
    public UserEntity create(UserEntity entity) {
        String sql = "INSERT INTO \"tb_user\" (id, name, sex, phone, address, date_of_birth) VALUES (nextval('hibernate_sequence'), :name, :sex, :phone, :address, CURRENT_TIMESTAMP) RETURNING *";
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("name", entity.getName());
        params.addValue("sex", entity.getSex());
        params.addValue("phone", entity.getPhone());
        params.addValue("address", entity.getAddress());

        try {
            return this.jdbcTemplate.queryForObject(sql, params, UserJdbcMapper.userRowMapper());
        } catch (Exception e) {
            log.error("{}", e);
            return null;
        }
    }

    @Override
    public UserEntity get(Integer id) {
        String sql = "SELECT * FROM \"tb_user\" WHERE id = :id LIMIT 1";
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);
        try {
            return this.jdbcTemplate.queryForObject(sql, params, UserJdbcMapper.userRowMapper());
        } catch (Exception e) {
            log.error("{}", e);
            return null;
        }
    }

    @Override
    public UserEntity update(Integer id, UserEntity entity) {
        String sql = "UPDATE \"tb_user\" SET name = :name, sex = :sex, phone = :phone, address = :address WHERE id = :id RETURNING *";
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);
        params.addValue("name", entity.getName());
        params.addValue("sex", entity.getSex());
        params.addValue("phone", entity.getPhone());
        params.addValue("address", entity.getAddress());

        try {
            return this.jdbcTemplate.queryForObject(sql, params, UserJdbcMapper.userRowMapper());
        } catch (Exception e) {
            log.error("{}", e);
            return null;
        }
    }

    @Override
    public void delete(Integer id) {
        String sql = "DELETE FROM \"tb_user\" WHERE id = :id";
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);
        try {
            log.info("{}", this.jdbcTemplate.update(sql, params) > 1);
        } catch (Exception e) {
            log.error("{}", e);
        }
    }
}
