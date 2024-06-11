{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  packages = with pkgs; [
    # your packages here (e.g: nodePackages_latest.pnpm)
    nodePackages_latest.pnpm
    nodejs_22
  ];

  shellHook = ''
    # export MY_VAR=123
  '';
}
