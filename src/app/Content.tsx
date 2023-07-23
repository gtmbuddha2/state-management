type Props = {
  permissions: undefined | string[];
};

export function Content({ permissions }: Props) {
  if (permissions === undefined) {
    return null;
  }

  return permissions.includes('admin') ? (
    <p>Some important stuff that only an admin can do</p>
  ) : (
    <p>Insufficient permissions</p>
  );
}
