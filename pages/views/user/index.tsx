import * as React from "react";
import { NextPage, NextPageContext } from "next";
import { UserService } from "src/user/user.service";
import { IUser } from "types";


interface UserListProps {
  users: IUser[];
  source: string;
}

const User: NextPage<UserListProps> = ({ users, source }: UserListProps) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {
            // Server로 부터 받아온 사용자 목록을 화면에 보여준다
            users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div style={{ fontStyle: "italic", fontSize: 14 }}>
        this page was rendered on the {source}
      </div>
    </>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  // Server에서 사용자 목록을 가져온다
  const props: UserListProps = {
    users: ctx.query.list as any,
    source: "server",
  };

  if (!Array.isArray(props.users)) {
    const service = new UserService();
    props.users = service.getall();
    props.source = "client";
  }
  return { props };
}

export default User;
