package net.camalpha.learn.articlemanagement.service.user;

import net.camalpha.learn.articlemanagement.model.user.form.UserCreateForm;
import net.camalpha.learn.articlemanagement.model.user.form.UserUpdateForm;
import net.camalpha.learn.articlemanagement.model.user.view.UserDetailView;
import net.camalpha.learn.articlemanagement.model.user.view.UserListView;
import net.camalpha.learn.articlemanagement.shared.model.response.DataResponse;
import net.camalpha.learn.articlemanagement.shared.model.response.PageResponse;

public interface UserService {

    PageResponse<UserListView> list(String query, Integer limit, Integer offset);

    DataResponse<UserDetailView> create(UserCreateForm form);

    DataResponse<UserDetailView> get(Integer id);

    DataResponse<UserDetailView> update(Integer id, UserUpdateForm form);

    DataResponse<UserDetailView> delete(Integer id);
}
